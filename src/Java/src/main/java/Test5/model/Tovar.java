package Test5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Товар
 */
@Entity(name = "IISTest5Товар")
@Table(schema = "public", name = "Товар")
public class Tovar {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Цена")
    private Double цена;

    @Column(name = "КодТ")
    private Integer кодт;

    @Column(name = "Название")
    private String название;


    public Tovar() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }

    public Integer getКодТ() {
      return кодт;
    }

    public void setКодТ(Integer кодт) {
      this.кодт = кодт;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }


}